import { Helmet } from "react-helmet-async";

export const SEO = ({
    title = "Sahrul Rafi ✌ | Software Engineer",
    description = "A software engineer with over 3 years of professional experience specializing in React, Nest.js, and TypeScript.",
    name = "Sahrul Rafi Zulfitra",
    type = "website",
    url = "https://rulcifer.github.io/",
    image = "/favicon-32x32.png",
}) => {
    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            {/* End standard metadata tags */}

            {/* Facebook tags */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={image} />
            {/* End Facebook tags */}

            {/* Twitter tags */}
            <meta name="twitter:creator" content={name} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
            {/* End Twitter tags */}
        </Helmet>
    );
};
