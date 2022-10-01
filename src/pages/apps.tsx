import { FC } from 'react';
import { ExternalLink } from 'react-external-link';
import Layout from '../components/Layout';
import SectionHeader from '../components/SectionHeader';
import SectionItem from '../components/SectionItem';
import ShlinkWebClientVideo from '../components/ShlinkWebClientVideo';
import Indivisible from '../components/Indivisible';
import { ImgSectionItem } from '../components/ImgSectionItem';

const Apps: FC = () => (
  <Layout pageTitle="Apps">
    <SectionHeader title="Apps">
      A curated list of either official or third-party apps that can be integrated with Shlink.
    </SectionHeader>

    <section className="theme-bg-light pb-4 pt-4">
      <div className="container">
        <SectionItem title="Shlink web client" block={<ShlinkWebClientVideo />}>
          <p>
            Manage any number of Shlink servers with this <Indivisible>React-based</Indivisible> progressive web
            application.
          </p>
          <p>
            See beautiful charts with your visit stats and easily create new short URLs.
          </p>
          <p>
            You can <ExternalLink href="https://github.com/shlinkio/shlink-web-client">self-host</ExternalLink> it
            yourself or try it from <ExternalLink href="https://app.shlink.io" />
          </p>
        </SectionItem>

        <ImgSectionItem reverse title="PSShlink" src="/images/apps/psshlink-powershell.png">
          <p>
            Manage your Shlink instance from the command line with this PowerShell module,
            by <ExternalLink href="https://twitter.com/codaamok">Adam Cook</ExternalLink>.
          </p>
          <p>
            See how to install it and further documentation on
            its <ExternalLink href="https://github.com/codaamok/PSShlink">GitHub repository</ExternalLink>, or
            learn more about it on this <ExternalLink href="https://adamcook.io/p/using-powershell-to-manage-shlink-with-psshlink/">blog post</ExternalLink>.
          </p>
        </ImgSectionItem>

        <ImgSectionItem title="Shlinkify" src="/images/apps/shlinkify.png">
          <p>
            Shlinkify is a WordPress plugin that will not only provide a dashboard to manage your short URLs, but
            also allow you to generate short URLs for your pages and posts on the fly.
          </p>
          <p>
            You can find it in the <ExternalLink href="https://wordpress.org/plugins/search/shlinkify/">WordPress plugin directory</ExternalLink> or
            in <ExternalLink href="https://github.com/the-markup/shlinkify/">GitHub</ExternalLink>.
          </p>
        </ImgSectionItem>
      </div>
    </section>
  </Layout>
);

export default Apps;
