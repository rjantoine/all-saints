module.exports = {
    async redirects() {
        return [
            {
                source: '/admin',
                destination: 'https://allsaintsdaincity.sanity.studio/',
                permanent: false,
            },
        ]
    },
}