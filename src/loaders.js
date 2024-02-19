import data from './dummyData.json'
const URL = '../dummyData.json'

export const linksLoader = async () => {
  //   const response = await fetch(`${URL}/bookmarks`)
  //   const bookmarksData = await response.json()
  return data
}
