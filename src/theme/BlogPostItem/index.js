/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import classnames from "classnames";
import { MDXProvider } from "@mdx-js/react";

import Link from "@docusaurus/Link";
import MDXComponents from "@theme/MDXComponents";

import styles from "./styles.module.css";

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function BlogPostItem(props) {
  const { children, frontMatter, metadata, truncated, isBlogPostPage = false } = props;
  const { date, permalink, tags, readingTime } = metadata;
  const { author, title } = frontMatter;

  const authorURL = frontMatter.author_url || frontMatter.authorURL;
  const authorTitle = frontMatter.author_title || frontMatter.authorTitle;
  const authorImageURL = frontMatter.author_image_url || frontMatter.authorImageURL;
  const defaultImgURL = "https://d2uqnt9f7uda88.cloudfront.net/img/screenshot-platform.png";
  const blogImageURL = frontMatter.image || defaultImgURL;

  const renderPostHeader = () => {
    const TitleHeading = isBlogPostPage ? "h1" : "h2";
    const match = date.substring(0, 10).split("-");
    const year = match[0];
    const month = MONTHS[parseInt(match[1], 10) - 1];
    const day = parseInt(match[2], 10);

    return (
      <header>
        <div className={styles.blogBannerImg}>
          <img src={blogImageURL} alt='' />
        </div>
        {(tags.length > 0 || truncated) && (
          <div className='row'>
            {tags.length > 0 && (
              <div className='col'>
                {tags.map(({ label, permalink: tagPermalink }) => (
                  <Link key={tagPermalink} className={classnames("button", "button--secondary", styles.blogPostTag)} to={tagPermalink}>
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}
        {isBlogPostPage ? (
          <TitleHeading className={classnames("margin-bottom--sm", styles.blogPostTitle)}>{title}</TitleHeading>
        ) : (
          <Link to={permalink} className={styles.blogLink}>
            {title}
          </Link>
        )}

        <div className='avatar margin-vert--md'>
          <div className='avatar__intro'>
            {author && (
              <>
                <div className={styles.blogMeta}>
                  <time dateTime={date} className={styles.blogPostDate}>
                    {month} {day}, {year}{" "}
                  </time>
                  <span className={styles.blogDot}>•</span>
                  <span className={styles.blogPostDate}>{Math.ceil(readingTime)} min read</span>
                </div>
              </>
            )}
          </div>
        </div>
      </header>
    );
  };

  return (
    <article className={classnames("margin-bottom--lg", "shadow--lw", styles.blogPostCard)}>
      {renderPostHeader()}
      <section className='markdown'>
        <MDXProvider components={MDXComponents}>{children}</MDXProvider>
      </section>
    </article>
  );
}

export default BlogPostItem;
