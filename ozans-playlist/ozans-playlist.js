// @ts-check

// NOTE: In the comments to his solution, SleeplessByte has an excellent
// explanation of why he uses `Array.from` instead of the rest operator to
// construct an array from a set:
// https://exercism.org/tracks/javascript/exercises/ozans-playlist/solutions/SleeplessByte

/**
 * Removes duplicate tracks from a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} new playlist with unique entries
 */
export function removeDuplicates(playlist) {
  return Array.from(new Set(playlist))
}

/**
 * Checks whether a playlist includes a track.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {boolean} whether the track is in the playlist
 */
export function hasTrack(playlist, track) {
  return new Set(playlist).has(track)
}

/**
 * Adds a track to a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function addTrack(playlist, track) {
  const playset = new Set(playlist)
  playset.add(track)
  return Array.from(playset)
}

/**
 * Deletes a track from a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function deleteTrack(playlist, track) {
  const playset = new Set(playlist)
  playset.delete(track)
  return Array.from(playset)
}

/**
 * Lists the unique artists in a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} list of artists
 */
export function listArtists(playlist) {
  return Array.from(new Set(playlist.map((track) => track.split(' - ').pop())))
}
