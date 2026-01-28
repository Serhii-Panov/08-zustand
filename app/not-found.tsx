import { Metadata } from "next";

export const metadata: Metadata = {
  title:"404 not found",
  description:"The page you are looking for was not found",
openGraph: {
    title:"404 not found",
    description:"The page you are looking for was not found",
    url:"https://notehub.com/app/not-found",
    images:[
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        width: 1200,
        height: 630,
        alt: "Notehub logo"
      }
      ],
      type: 'article'
  }
}

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1 className={css.title}>404 - Page not found</h1>
      <p className={css.description}>
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
};
export default NotFound;

const css = {
  title: "text-4xl font-bold mb-4",
  description: "text-lg text-gray-600",
};