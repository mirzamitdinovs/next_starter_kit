import Navbar from 'components/Navbar';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export default function Home() {
	const { t } = useTranslation();
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<h1 className={styles.title}>{t('home:welcome_msg')}</h1>
			</main>
		</div>
	);
}

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ['home'])),
		},
	};
}
