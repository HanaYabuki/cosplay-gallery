const jsonRoot = 'https://cdn.jsdelivr.net/gh/HanaYabuki/cosplay-db@master/main.json'
const urlRoot = '//cdn.jsdelivr.net/gh/HanaYabuki/cosplay-db@master/'

async function view() {
    const view = await fetch(jsonRoot)
        .then(resp => resp.json())
        .then(d => {
            return d.map(i => ({
                ...i,
                link: '/gallery.html?g=' + encodeURIComponent(i.title),
                photosSrc: i.photos.map(p => ({
                    fast: urlRoot + i.root.replace('img', 'fastimg') + '/' + p,
                    raw: urlRoot + i.root + '/' + p
                }))
            }))
        })
        .catch(e => console.log(e))

    console.log('view: ', view)
    return view
}
