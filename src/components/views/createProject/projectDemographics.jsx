import countries from '../../../assets/countries.json';

const ProjectDemographics = (props) => {
    return ( 
        <div className="views view-1">
            <form>
                <div className="form-group required">
                    <label className="form-label">Client Name</label>
                    <input type="text" className="form-control" name="clientName"
                        placeholder="Please Enter client name" 
                        value={props.projectDemographic.clientName} 
                        onChange={props.inputChangeHandler}/>
                </div>
                <div className="form-group required">
                    <label className="form-label">Hay! What do you want to name your project?</label>
                    <input type="text" className="form-control" name="projectName"
                        placeholder="Please Enter project name" 
                        value={props.projectDemographic.projectName} 
                        onChange={props.inputChangeHandler}/>
                </div>
                <div className="form-group">
                    <label>Tell us more about the project</label>
                    <textarea className="form-control" rows="5" name="additionalComments"
                        placeholder="Please add some additonal comments"
                        value={props.projectDemographic.additionalComments} 
                        onChange={props.inputChangeHandler}></textarea>
                </div>

                <div className="form-group required">
                    <label className="form-label">Portfolio</label>
                    <select className="form-control" name="portfolio" onChange={props.selectChangeHandler} value={props.projectDemographic.portfolio}>
                        <option>Choose Portfolio</option>
                        {
                            props.cpFieldsDefaultData.portfolio.map( opt =>
                                <option key={opt.value} value={opt.value}>{opt.label}</option>
                            )
                        }
                    </select>
                </div>
                <div className="form-group required">
                    <label className="form-label">What phase of the project are you in?</label>
                    <select className="form-control" name="lifeCyclePhase" onChange={props.selectChangeHandler} value={props.projectDemographic.lifeCyclePhase}>
                        <option>Choose Project Phase</option>
                        {
                            props.cpFieldsDefaultData.lifeCyclePhase.map( opt =>
                                <option key={opt.key} value={opt.value}>{opt.label}</option>
                            )
                        }
                    </select>
                </div>

                <div className="form-group required">
                    <label className="form-label">Country</label>
                    <select className="form-control" name="country" onChange={props.selectChangeHandler} value={props.projectDemographic.country}>
                        <option>Select Country</option>
                        {
                            countries.countriesData.map( opt =>
                                <option key={opt.code} value={opt.code}>{opt.name}</option>
                            )
                        }
                    </select>
                </div>
                
            </form>
        </div>
     );
}
 
export default ProjectDemographics;