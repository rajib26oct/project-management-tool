import _ from 'lodash';
let changeStep;
const Confirmation = ({cpFormData,cpFieldsDefaultData:defaultData, goToStep}) => {
    changeStep = goToStep;
    return ( 
        <div className="views view-6">
            {
                populateEachStepsData(cpFormData.projectDemographic,defaultData.projectDemographic,1)
            }
            {
                populateEachStepsData(cpFormData.contractDetails,defaultData.contractDetails,2)
            }
            {
                populateEachStepsData(cpFormData.scope,defaultData.scope,3)
            }
            {
                populateEachStepsData(cpFormData.keyContacts,defaultData.keyContacts,4)
            }
            {
                populateRiskView(cpFormData.risk,defaultData.risk,5)
            }
        </div>
     );
}

const populateEachStepsData = (pdFormData, pdDefaultData,step) =>{
    let displayDataList = [];
    let labelData=null;

    Object.keys(pdFormData).map((key, index) =>{
        labelData = getLabel(pdDefaultData.labelInformation,key);
        if(labelData !==undefined){
            displayDataList.push({"label": labelData.label, "value":''+pdFormData[key]})
        }  
    })

    return getEachStepUI(displayDataList,step)
    
}

const getEachStepUI = (displayDataList,step) =>{
    let sectionTitle = "";
    let key='';
    switch (step) {
        case 1:sectionTitle = "Project Demographics"; break;
        case 2:sectionTitle = "Contract Details"; break;
        case 3:sectionTitle = "Scope"; break;
        case 4:sectionTitle = "Key Contacts"; break;
    }
    return(  
        <form>
            <fieldset>
                <div className="edit-btn" onClick={()=>changeStep(step)}><i className="fa fa-pencil-square" aria-hidden="true"></i></div>
                <legend>{sectionTitle}</legend>
                {
                    displayDataList.map((data, ind) =>
                            <label key={`${step}-${ind}`}><span className="title">{data.label}:</span> <span className="display-value">{data.value}</span></label>
                    )
                }
            </fieldset>
            
        </form>
    );
}

const getLabel = (list,key) =>{
    const labelObj =  list.find( obj => obj.key === key);

    return labelObj;
}


const populateRiskView = (riskData, pdDefaultData,step)=>{
    let displayEachDataList = [];
    let displayDataList = [];
    let labelData=null;
    let htmlString = "";

    riskData.map((risk,ind) =>{
        displayEachDataList = [];
        Object.keys(risk).map((key, index) =>{
            labelData = getLabel(pdDefaultData.labelInformation,key);
            if(labelData !==undefined){
                displayEachDataList.push({"label": labelData.label, "value":''+risk[key]})
            }  
        })
        displayDataList.push(getRiskUI(displayEachDataList,step,ind));
    });

    

    return(
        <form>
            <fieldset>
                <div className="edit-btn" onClick={()=>changeStep(step)}><i className="fa fa-pencil-square" aria-hidden="true"></i></div>
                <legend>Risk</legend>
                { 
                    <div>
                    {
                        displayDataList
                    }
                    
                    </div>
                }
                
            </fieldset>
        </form>
    )

}

const getRiskUI = (displayDataList,step,index) =>{
    return(  
        
        <div key={`${index}--${step}`} className="each-risk-row">
            {
                displayDataList.map((data, ind) =>
                    <label key={`${index}--${step}-${ind}`}><span className="title">{data.label}:</span> <span className="display-value">{data.value}</span></label>
                )
            }
        </div>
    );
}


 
export default Confirmation;