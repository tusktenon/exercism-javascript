// @ts-check

function setToList(set) {
  const list = []
  set.forEach((element) => list.push(element))
  return list
}

/**
 * Removes duplicate tracks from a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} new playlist with unique entries
 */
export function removeDuplicates(playlist) {
  return setToList(new Set(playlist))
}

/**
 * Checks whether a playlist includes a track.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {boolean} whether the track is in the playlist
 */
export function hasTrack(playlist, track) {
  const playset = new Set(playlist)
  return playset.has(track)
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
  return setToList(playset)
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
  return setToList(playset)
}

/**
 * Lists the unique artists in a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} list of artists
 */
export function listArtists(playlist) {
  const artists = new Set()
  for (const track of playlist) {
    let [, artist] = track.split(' - ')
    artists.add(artist)
  }
  return setToList(artists)
}
