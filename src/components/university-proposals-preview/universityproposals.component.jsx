import React from 'react';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

//import { isUserUniversityFetching } from '../../redux/UserUniversityReducer/university.selectors';

import './universityproposals.styles.scss';

import ProposalBox from '../proposalbox/proposalbox.component';
import WithSpinner from '../withSpinner/withSpinner.component';

class UniversityProposalsPreview extends React.Component {
  render() {
    const { proposals, universityId } = this.props;

    return (
      <div className="university-proposal-preview">
        {proposals.map((el, i) => (
          <ProposalBox key={i} universityId={universityId} {...el} />
        ))}
      </div>
    );
  }
}
export default WithSpinner(UniversityProposalsPreview);
