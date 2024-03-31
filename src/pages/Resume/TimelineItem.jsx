

const TimelineItem = ({ title, date, description }) => {
    return (
      <li className="timeline-item">
        <h4 className="h4 timeline-item-title">{title}</h4>
        <p className="timeline-text">{description}</p>
        <span>{date}</span>
      </li>
    );
  }
  
  export default TimelineItem;