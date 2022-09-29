import React from 'react'

const Detail = (props) => {
    const {District, Name, Baseline, Party,
      POPULATION, CVAP_19,DOJ_NH_BLK,
      DOJ_NH_ASN, NH_WHT_CVA,HSP_CVAP_1  } = props.data.data;
  return (
    <div>
        District: {District} <br/>
        Name: {Name} <br/>
        <hr />
        Party: {Party} <br/>
        Baseline: {Baseline} <br />
        Citizens of Voting Age (CVA): {CVAP_19} <br/>
        CVA Black: {DOJ_NH_BLK} <br />
        CVA Asian: {DOJ_NH_ASN} <br/>
        CVA Hispanic: {HSP_CVAP_1} <br/>
        CVA White: {NH_WHT_CVA} <br />
    </div>
  )
}

export default Detail