/// <reference path="./global.d.ts" />

import { Untranslatable } from './errors'

// @ts-check
//
// The lines above enable type checking for this file. Various IDEs interpret
// the @ts-check and reference directives. Together, they give you helpful
// autocompletion when implementing this exercise. You don't need to understand
// them in order to use it.
//
// In your own projects, files, and code, you can play with @ts-check as well.

export class TranslationService {
  /**
   * Creates a new service
   * @param {ExternalApi} api the original api
   */
  constructor(api) {
    this.api = api
  }

  /**
   * Attempts to retrieve the translation for the given text.
   *
   * - Returns whichever translation can be retrieved, regardless the quality
   * - Forwards any error from the translation api
   *
   * @param {string} text
   * @returns {Promise<string>}
   */
  free(text) {
    return this.api.fetch(text).then(response => response.translation)
  }

  /**
   * Batch translates the given texts using the free service.
   *
   * - Resolves all the translations (in the same order), if they all succeed
   * - Rejects with the first error that is encountered
   * - Rejects with a BatchIsEmpty error if no texts are given
   *
   * @param {string[]} texts
   * @returns {Promise<string[]>}
   */
  batch(texts) {
    if (texts.length === 0) return Promise.reject(new BatchIsEmpty())
    return Promise.all(texts.map(text => this.free(text)))
  }

  /**
   * Requests the service for some text to be translated.
   *
   * Note: the request service is flaky, and it may take up to three times for
   *       it to accept the request.
   *
   * @param {string} text
   * @returns {Promise<void>}
   */
  request(text) {
    // Select an implementation:
    // return this.request1(text)
    return this.request2(text)
  }

  // Option 1: Construct the returned Promise directly
  request1(text) {
    return new Promise((resolve, reject) => {
      this.api.request(text, e1 => {
        if (e1 instanceof Untranslatable) reject(e1)
        else if (e1 === undefined) resolve(e1)
        else {
          this.api.request(text, e2 => {
            if (e2 === undefined) resolve(e2)
            else {
              this.api.request(text, e3 => {
                if (e3 === undefined) resolve(e3)
                else reject(e3)
              })
            }
          })
        }
      })
    })
  }

  // Option 2: Convert the API request to a Promise, to take advantage of
  // Promise chaining
  request2(text) {
    const asPromise = () =>
      new Promise((resolve, reject) => {
        this.api.request(text, result =>
          result === undefined ? resolve() : reject(result),
        )
      })

    return asPromise().catch(asPromise).catch(asPromise)
  }

  /**
   * Retrieves the translation for the given text
   *
   * - Rejects with an error if the quality can not be met
   * - Requests a translation if the translation is not available, then retries
   *
   * @param {string} text
   * @param {number} minimumQuality
   * @returns {Promise<string>}
   */
  premium(text, minimumQuality) {
    return this.api
      .fetch(text)
      .catch(err => {
        if (err instanceof Untranslatable) throw err
        return this.request(text).then(() => this.api.fetch(text))
      })
      .then(result => {
        if (result.quality < minimumQuality) throw new QualityThresholdNotMet()
        return result.translation
      })
  }
}

/**
 * This error is used to indicate a translation was found, but its quality does
 * not meet a certain threshold. Do not change the name of this error.
 */
export class QualityThresholdNotMet extends Error {
  /**
   * @param {string} text
   */
  constructor(text) {
    super(
      `
The translation of ${text} does not meet the requested quality threshold.
    `.trim(),
    )

    this.text = text
  }
}

/**
 * This error is used to indicate the batch service was called without any
 * texts to translate (it was empty). Do not change the name of this error.
 */
export class BatchIsEmpty extends Error {
  constructor() {
    super(
      `
Requested a batch translation, but there are no texts in the batch.
    `.trim(),
    )
  }
}
