

const Activities = (props) => {

    console.log(props)
    const {activities} = props
    return<>
        <h2>Activities</h2>
        <div className="act-cont">
        {
            activities.map(activity => {
                return<div className="activity-style" key={activity._id}>
                    <h4>{activity.activityTitle}</h4>
                    <img src={activity.activityImg} alt="Activity"/>
                </div>
            })
        }
        </div>
    </>
}


export default Activities;
