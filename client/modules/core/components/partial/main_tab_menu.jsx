import React, { PropTypes } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import T from '/lib/i18n';
import { $ } from 'meteor/jquery';

let lastScrollTop = 0;

export default class MainTabMenu extends React.Component {
  static propTypes = {
    currentRoute: PropTypes.string,
    goTo: PropTypes.func,
  };
  componentDidMount() {
    let didScroll;
    window.addEventListener('scroll', () => didScroll = true);
    setInterval(() => {
      if (didScroll) {
        this.handleScroll();
        didScroll = false;
      }
    }, 250);
  }
  handleScroll = () => {
    const delta = 5;
    const navBarHeight = 48;
    const currentScroll = $(window).scrollTop();

    if (Math.abs(lastScrollTop - currentScroll) <= delta) return;
    if (currentScroll > lastScrollTop && currentScroll > navBarHeight) {
      $('.main-tab-menu').addClass('main-nav-up');
    } else {
      if (currentScroll + $(window).height() < $(document).height()) {
        $('.main-tab-menu').removeClass('main-nav-up');
      }
    }
    lastScrollTop = currentScroll;
  };
  goTo = (tab) => {
    this.props.goTo(tab.props.value);
  };
  render() {
    const { currentRoute } = this.props;
    return (
      <nav className="main-tab-menu">
        <Tabs value={currentRoute}>
          <Tab
            label={<T>home</T>}
            value="landing"
            onActive={this.goTo}
          />
          <Tab
            label={<T>tours</T>}
            value="tours"
            onActive={this.goTo}
          />
          <Tab
            label={<T>visas</T>}
            value="visas"
            onActive={this.goTo}
          />
          <Tab
            label={<T>news</T>}
            value="news"
            onActive={this.goTo}
          />
          <Tab
            label={<T>contacts</T>}
            value="contacts"
            onActive={this.goTo}
          />
        </Tabs>
      </nav>
    );
  }
}
