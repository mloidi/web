import React, { useContext } from 'react';
import styled from 'styled-components';

import { device } from './Elements';
import { DataContext } from '../globalState';

const Content = styled.div`
  padding: 10px 200px;
  font-family: 'Cutive Mono', monospace;
  @media ${device.tablet} {
    padding: 10px 20px;
  }

  a {
    color: ${(props) => props.color};
  }
`;

const Title = styled.div`
  display: inline-block;
  background-color: ${(props) => props.color};
  padding: 5px 10px;
  margin-bottom: 5px;
  font-size: 1.7rem;
`;

export const Title2 = styled.div`
  font-size: 1.5rem;
  ::before {
    content: '';
    width: 10px;
    height: 10px;
    margin-left: -10px;
    margin-top: 5px;
    background-color: ${(props) => props.color};
    pointer-events: none;
    position: absolute;
    z-index: -1;
  }
`;

export const Paragraph = styled.p`
  margin: 20px 0;
`;

export const Cookies = () => {
  const { selectedColor } = useContext(DataContext);
  return (
    <Content color={selectedColor}>
      <Title color={selectedColor}>Cookie Policy</Title>
      <Paragraph>
        This Cookie Policy explains how cookies and similar technologies
        (collectively, “Cookie(s)”) are used when you visit our Site. A “Site”
        includes our websites, emails, and other applications owned and operated
        by mloidi.com (the “Company”, “our”, or “us”) as well as any other
        services that display this Cookie Policy. This policy explains what
        these technologies are and why they are used, as well as your right to
        control their use.
      </Paragraph>
      <Paragraph>
        If you have any question, please contact us by email at
        privacy@mloidi.com.
      </Paragraph>
      <Title2 color={selectedColor}>1. What Is A Cookie?</Title2>
      <Paragraph>
        A cookie is a small text file (often including a unique identifier),
        that is sent to a user’s browser from a website's computers and stored
        on a user’s computer's hard drive or on a tablet or mobile device
        (collectively, “Computer”). A Cookie stores a small amount of data on
        your Computer about your visit to the Site.
      </Paragraph>
      <Paragraph>
        We may also use “web beacons” (also known as “clear GIFs” or “pixel
        tags”) or similar technologies on our Site to enable us to know whether
        you have visited a web page or received a message. A web beacon is
        typically a one-pixel, transparent image (although it can be a visible
        image as well), located on a web page or in an email or other type of
        message, which is retrieved from a remote website on the internet
        enabling the verification of an individual's viewing or receipt of a web
        page or message. A web beacon helps us to understand whether you came to
        our website from an online advertisement displayed on a third-party
        website, measure successes of email marketing campaigns and improve our
        website performance. They may also enable us to relate your viewing or
        receipt of a web page or message to other information about you,
        including your personal information. In many instances, web beacons rely
        on cookies to function properly, and so declining cookies will impair
        their functioning.
      </Paragraph>
      <Paragraph>
        We place and access Cookies on your Computer; these Cookies are known as
        “first-party Cookies.” Cookies may also be placed and accessed by some
        of our third-party vendors, which are known as “third-party Cookies” and
        are described below. Some Cookies are "session Cookies," which means
        that they are temporary Cookies that are only stored on your device
        while you are visiting our Site. Other Cookies are "persistent Cookies,"
        which means that they are stored on your device for a period of time
        after you leave our Site.
      </Paragraph>
      <Paragraph>
        You can choose whether to accept Cookies by changing the settings on
        your browser. However, if you disable this function (or keep this
        function disabled, as set by default by certain browsers), your
        experience on the Site may be diminished and some features may not work
        as intended.
      </Paragraph>
      <Title2 color={selectedColor}>2. What Cookies Do We Use?</Title2>
      <Paragraph>
        Below we list the different types of Cookies that are used on the Site
        that you are visiting.
      </Paragraph>
      <Paragraph>
        To the extent any personal information is collected through first-party
        Cookies, our Privacy Policy applies and complements this Cookie Policy.
        Personal information collected through a third-party Cookie is subject
        to the privacy policy of that third party, and not our Privacy Policy.
      </Paragraph>
      <div>Analytics Cookies</div>
      <Paragraph>
        Analytics Cookies collect information about your use of the Site, and
        enable us to improve the way it works. For example, Analytics Cookies
        show us which are the most frequently visited pages on the Site, help us
        record any difficulties you have with the Site, and show us whether our
        advertising is effective or not. Analytics Cookies allow us to see the
        overall patterns of usage on the Site, rather than the usage of a single
        person. We use information from Analytics Cookies to analyze the Site
        traffic, but we do not examine this information for individually
        identifying information.
      </Paragraph>
      <div>
        Cookie: _ga, _gtag_UA_129704170_1, _gid, <br />
        Description: Google Analytics <br />
        Duration: 1 year, 6 months <br />
        Privacy policy:{' '}
        <a
          href='https://policies.google.com/privacy'
          target='_blank'
          rel='noopener noreferrer'
        >
          go to site
        </a>
      </div>
      <Title2 color={selectedColor}>3. How Do I Manage Cookies?</Title2>
      <Paragraph>
        You can change your Cookie settings above by opting out of certain or
        all Cookies.
      </Paragraph>
      <Paragraph>
        In addition to the options provided above, you may refuse or accept
        Cookies from the Site or any other website at any time by activating
        settings on your browser. Most browsers automatically accept Cookies,
        but you can usually modify your browser setting to decline Cookies if
        you prefer. If you choose to decline Cookies, you may not be able to
        sign in or use other interactive features of our Site that depend on
        Cookies. Information about the procedure to follow in order to enable or
        disable Cookies can be found at:
      </Paragraph>
      <div>
        <a
          href='https://support.google.com/chrome/answer/95647?hl=en'
          target='_blank'
          rel='noopener noreferrer'
        >
          Chrome
        </a>
      </div>
      <div>
        <a
          href='https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac'
          target='_blank'
          rel='noopener noreferrer'
        >
          Safari
        </a>
      </div>
      <div>
        <a
          href='https://support.apple.com/en-us/HT201265'
          target='_blank'
          rel='noopener noreferrer'
        >
          Safari Mobile (iPhone and iPads)
        </a>
      </div>
      <div>
        <a
          href='https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox?redirectlocale=en-US&redirectslug=delete-cookies-remove-info-websites-stored'
          target='_blank'
          rel='noopener noreferrer'
        >
          Firefox
        </a>
      </div>
      <div>
        <a
          href='https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies'
          target='_blank'
          rel='noopener noreferrer'
        >
          Microsoft Edge
        </a>
      </div>
      <Paragraph>
        For more information about other commonly used browsers, please refer to{' '}
        <a
          href='http://www.allaboutcookies.org/manage-cookies/'
          target='_blank'
          rel='noopener noreferrer'
        >
          http://www.allaboutcookies.org/manage-cookies/
        </a>
        .
      </Paragraph>
      <Paragraph>Please be aware that</Paragraph>
      <Paragraph>
        if Cookies are disabled, not all features of the Site may operate as
        intended.
      </Paragraph>
      <Paragraph>
        To opt-out of participating in Google Analytics data follow the
        instructions:{' '}
        <a
          href='https://tools.google.com/dlpage/gaoptout'
          target='_blank'
          rel='noopener noreferrer'
        >
          https://tools.google.com/dlpage/gaoptout
        </a>
        .
      </Paragraph>
      <Paragraph>
        If the Site has ads, some of the network advertisers, ad agencies and
        other vendors we work with to serve ads on our Site, third-party
        websites and across the internet, or analytics providers that provide us
        with information regarding the use of the Site and effectiveness of ads
        are members of the Network Advertising Initiatives, the Digital
        Advertising Alliance Self-Regulatory Program for Online Behavioural
        Advertising and/or the European Interactive Digital Advertising
        Alliance. To opt out from receiving interest-based advertising from some
        or all of the participating companies, please visit{' '}
        <a
          href='http://www.aboutads.info/choices/'
          target='_blank'
          rel='noopener noreferrer'
        >
          http://www.aboutads.info/choices/
        </a>{' '}
        and
        <a
          href='http://www.youronlinechoices.eu/'
          target='_blank'
          rel='noopener noreferrer'
        >
          http://www.youronlinechoices.eu/
        </a>
        . Please note opting out through these mechanisms does not mean you will
        no longer be served advertising. You will still receive other types of
        online advertising from participating companies and any type of
        advertising from non-participating companies, and the web sites you
        visit may still collect information for other purposes.
      </Paragraph>
    </Content>
  );
};
