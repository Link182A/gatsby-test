import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Layout } from '../components/common'
import BannerSection from '../components/parts/banner-section'
import SongSection1 from '../components/parts/song-section-1'
// import SEO from '../components/common/SEO'
// import Header from '../components/theme/Header'
// <SEO title="welcome" />
// 	<Header />

// <section className='banner'>
// 	<FormattedMessage id="welcome" />
// </section>
const IndexPage = () => (
	<Layout>
		<BannerSection/>
		<SongSection1/>
	</Layout>
)


export default IndexPage
