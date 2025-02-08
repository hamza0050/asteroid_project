async function getData() {
    const data = await fetch("https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-07&api_key=SzqVDveitbll737IvULkOwJYjEbMDKY9D9NukFSq")
    const res = await data.json()

    return res
}