
const Confirmation = (props) => {
    const cpFormData = props.cpFormData;
    const defaultData = props.cpFieldsDefaultData;
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
        case 1:sectionTitle = "Project Demographic"; break;
        case 2:sectionTitle = "Contract Details"; break;
        case 3:sectionTitle = "Scope"; break;
        case 4:sectionTitle = "Key Contacts"; break;
    }
    return(  
        <form>
            <fieldset>
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
 
export default Confirmation;