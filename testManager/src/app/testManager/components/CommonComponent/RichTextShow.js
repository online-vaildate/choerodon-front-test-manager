/* eslint-disable react/no-danger */
import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import './RichTextShow.scss';

const QuillDeltaToHtmlConverter = require('quill-delta-to-html');

class RichTextShow extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isOpen: {},
      src: '',
      open: false,
    };
  }

  componentDidMount() {
    // const imgs = document.querySelector('img');
    // document.querySelector('img').addEventListener('click', (e) => {
    //   window.console.info(e.target.nodeName);
    //   this.setState({
    //     open: true,
    //     src: e.target.src,
    //   });
    //   e.stopPropagation();
    // });
    window.addEventListener('click', (e) => {
      if (e.target.nodeName === 'IMG') {
        window.console.info(e.target.nodeName);
        this.setState({
          open: true,
          src: e.target.src,
        });
        e.stopPropagation();
      }
    });
  }

  onOpenLightboxChange = (index) => {
    const { isOpen } = this.state;
    isOpen[index] = !isOpen[index];
    this.setState({
      isOpen,
    });
  };

  getSubject = (data) => {
    const replyContents = [];
    if (data) {
      JSON.parse(data).forEach((item, index) => {
        if (item.insert && item.insert.image) {
          replyContents.push(
            <span>
              <img
                role="none"
                src={item.insert.image}
                style={{ display: 'block', maxWidth: '600px' }}
                alt={Choerodon.getMessage('图片加载中...', 'Image Loading...')}
                // onClick={() => this.onOpenLightboxChange(`${index}`)}
              />
              {this.state.isOpen[`${index}`] ? (
                <Lightbox
                  mainSrc={item.insert.image}
                  onCloseRequest={() => this.onOpenLightboxChange(`${index}`)}
                  imageTitle={'images'}
                />
              ) : (
                ''
              )}
            </span>,
          );
        } else {
          const delta = [];
          delta.push(item);
          const converter = new QuillDeltaToHtmlConverter(delta, {});
          // 去掉p标签
          let text = converter.convert();
          if (converter.convert().substring(0, 3) === '<p>') {
            text = converter.convert().substring(3, converter.convert().length - 4);
          }
          replyContents.push(<span dangerouslySetInnerHTML={{ __html: `${this.escape(text)}` }} />);
        }
      });
    }
    return replyContents;
  };

  escape = str => str.replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--');

  render() {
    return (
      <div className="c7n-read-delta" style={{ width: '100%' }}>
        <div dangerouslySetInnerHTML={{ __html: `${this.escape(this.props.data)}` }} />
        {
          this.state.open ? (
            <Lightbox
              mainSrc={this.state.src}
              // onCloseRequest={() => this.setState({ open: false })}
              imageTitle={'images'}
            />
          ) : null
        }
      </div>
    );
  }
}

export default RichTextShow;
