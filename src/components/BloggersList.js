import React, { useEffect, useState } from 'react';
import BloggerCard from './BloggerCard';
import Ajv from 'ajv';
import './styles.css';

const BloggersList = () => {
  const [bloggers, setBloggers] = useState([]);
  const ajv = new Ajv();

  const schema = {
    type: "array",
    items: {
      type: "object",
      properties: {
        name: { type: "string" },
        description: { type: "string" },
        avatar: { type: "string", format: "uri" },
        wechatQr: { type: "string", format: "uri" },
        weibo: { type: "string", format: "uri" },
        twitter: { type: "string", format: "uri" },
        blog: { type: "string", format: "uri" }
      },
      required: ["name", "description", "avatar", "wechatQr", "weibo", "twitter", "blog"]
    }
  };

  const validate = ajv.compile(schema);

  useEffect(() => {
    fetch('/bloggers.json')
      .then(response => response.json())
      .then(data => {
        const valid = validate(data);
        if (!valid) {
          console.error('Validation errors:', validate.errors);
          return;
        }
        setBloggers(data);
      })
      .catch(error => console.error('Error fetching bloggers:', error));
  }, []);

  return (
    <div className="bloggers-list">
    {bloggers.map((blogger, index) => (
      <BloggerCard key={index} blogger={blogger} />
    ))}
  </div>
);
};

export default BloggersList;