import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: '9eq07096', // you can find this in sanity.json
    dataset: 'production', // or the name you chose in step 1
    apiVersion: '2022-04-29',
    token: 'sk9Y0apitxarbskeXn3rvyqvDIvkvSNtqZC1E1BxVdsnfjZCwaItWlJENabjvEhVZDVzC7CZEPL1oNaBuCnkngnC6bY8d9ZkoLjuOKhxoEGpb3e9h51HkGiu3G22Di8I7bipxpaSIS4WQiDOr0Xe8TYjfhZO2iM71vcxs7RN4qaSzRptJUbc',
    useCdn: false // `false` if you want to ensure fresh data
})