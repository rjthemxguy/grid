import React from 'react'

const Detail = (props) => {
    const {District, Name, Baseline, Party,
      POPULATION, CVAP_19,DOJ_NH_BLK,
      DOJ_NH_ASN, NH_WHT_CVA,HSP_CVAP_1  } = props.data.data;

      const CVAP_19F = CVAP_19.toLocaleString("en-US");
      const DOJ_NH_BLKF = DOJ_NH_BLK.toLocaleString("en-US");
      const DOJ_NH_ASNF = DOJ_NH_ASN.toLocaleString("en-US");
      const HSP_CVAP_1F = HSP_CVAP_1.toLocaleString("en-US");
      const NH_WHT_CVAF = NH_WHT_CVA.toLocaleString("en-US");


  return (
    <div>
        District: {District} <br/>
        Name: {Name} <br/>
        <hr />
        Party: {Party} <br/>
        Baseline: {Baseline} <br />
        Citizens of Voting Age (CVA): {CVAP_19F} <br/>
        CVA Black: {DOJ_NH_BLKF} <br />
        CVA Asian: {DOJ_NH_ASNF} <br/>
        CVA Hispanic: {HSP_CVAP_1F} <br/>
        CVA White: {NH_WHT_CVAF} <br />
    </div>
  )
}

export default Detail