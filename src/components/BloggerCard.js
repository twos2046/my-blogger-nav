import React from 'react';

const BloggerCard = ({ blogger }) => (
  <div className="blogger-card">
    <img src={blogger.avatar} alt={`${blogger.name} avatar`} className="avatar" />
    <h2>{blogger.name}</h2>
    <p>{blogger.description}</p>
    <div className="social-links">
      <a href={blogger.weibo} target="_blank" rel="noopener noreferrer">微博</a>
      <a href={blogger.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>
      <a href={blogger.blog} target="_blank" rel="noopener noreferrer">博客</a>
    </div>
    <div className="wechat-qr">
      <img src={blogger.wechatQr} alt={`${blogger.name} WeChat QR`} />
    </div>
  </div>
);

export default BloggerCard;