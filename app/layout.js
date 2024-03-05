import { Ubuntu } from "next/font/google";
import "styles/reset.scss"
import "styles/base.scss"
import styles from 'styles/layout.module.scss'
import Header from 'components/Header'
import Footer from 'components/Footer'

const ubuntu = Ubuntu({
  weight: "700",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    template: '%s | HIROKI ISHIDA PORTFOLIO',
    default: 'HIROKI ISHIDA PORTFOLIO',
  },
  description: '',
  robots: {
    googleBot: {
      index: false,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={ubuntu.className}>
          <Header />
            <main className={styles.main}>
              <div className={styles.main_inner}>
                {children}
              </div>
            </main>
          <Footer />
      </body>
    </html>
  )
}
