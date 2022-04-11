import 'styles/globals.css';
import Layout from './containers/Layout';
import { appWithTranslation } from 'next-i18next';
import { AppWrapper } from 'contexts/AppContext';

function MyApp({ Component, pageProps }) {
	return (
		<AppWrapper>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</AppWrapper>
	);
}

export default appWithTranslation(MyApp);
