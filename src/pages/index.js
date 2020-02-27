import React from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import { Layout, Container } from '../components/common'
import SEO from '../components/common/SEO'
import Header from '../components/theme/Header'

const IndexPage = () => (
	<Layout>
			<SEO title="welcome" />
			<Header />
			<Welcome as={Container}>
				<h2>
					<FormattedMessage id="welcome" />
				</h2>
			</Welcome>
	</Layout>
)

const Welcome = styled.div`
	padding: 2rem 0;
`

export default IndexPage