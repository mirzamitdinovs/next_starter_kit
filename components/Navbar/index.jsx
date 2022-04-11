import Link from 'next/link';
import { useRouter } from 'next/router';

// *  USE THIS WEBSITE FOR TRANSLATION
// https://www.i18next.com
const Navbar = () => {
	const router = useRouter();
	const { locales, locale: activeLocale } = router;
	const otherLocales = locales.filter((locale) => locale !== activeLocale);

	return (
		<div>
			<p>Locale switcher:</p>
			<ul>
				{otherLocales.map((locale) => {
					const { pathname, query, asPath } = router;
					return (
						<li key={locale}>
							<Link href={{ pathname, query }} as={asPath} locale={locale}>
								<a>{locale}</a>
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Navbar;
