import React from 'react';
import Banner from './Banner';
import HotJobs from './HotJobs';
import BrowseByCategory from './BrowseByCategory';
import JobSection from './JobSection';
import StatsSection from './StatsSection';

const Home = () => {
  return (
    <div>
      <section>
        <Banner></Banner>
        <BrowseByCategory></BrowseByCategory>
        <HotJobs></HotJobs>
        <JobSection></JobSection>
        <StatsSection></StatsSection>
      </section>
    </div>
  );
};

export default Home;