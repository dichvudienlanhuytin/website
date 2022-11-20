// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })

  api.loadSource(async store => {
    store.addMetadata('company', {
      short_name: "ĐIỆN LẠNH TÂM ĐỨC",
      name: "CÔNG TY TNHH THƯƠNG MẠI DỊCH VỤ CƠ ĐIỆN LẠNH TÂM ĐỨC",
      telephone1: "0901646488",
      telephone2: "0976763713",
      email: "dienlanhtamduc@gmail.com",
      fax: "111-11-11",
      address: "92/10/6 Lâm Thị Hố, P.Tân Chánh Hiệp, Q.12, TPHCM, VN",
      tax: "0317109937",
      description: "CHỮ TÍN - NIỀM TIN - TRÁCH NHIỆM",
      branch: [
        '92/10/6 Lâm Thị Hố, P.Tân Chánh Hiệp, Q.12, TPHCM, VN'
      ]
    })
  })
}
