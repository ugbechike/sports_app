import React, { Component } from 'react';
import './Commentry.css';
import { VerticalTimeline, VerticalTimelineElement, WorkIcon, SchoolIcon, StarIcon }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import TreadIcon from "../../Assets/timeline__tread.svg";


class Commentry extends Component{

    
    
    
    render(){
        var IconStyle = {
            backgroundImage: `url(${TreadIcon})`, 
            backgroundRepeat:"no-repeat", 
            backgroundAttachement:"fixed", 
            backgroundPosition:"center", 
            backgroundColor:"white" 
        }
        return(
            <div>
               <VerticalTimeline layout="one-column">
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2011 - present"
                        iconStyle={IconStyle}
                        // icon={<WorkIcon />}
                    >
                        <p>
                            Good effort! Salah with a decent effort after Robertson's cutback, 
                            but the Egyptian can't keep his shot down and it flies just over the crossbar. 
                            That makes it 36 efforts at goal today by Liverpool.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2010 - 2011"
                        iconStyle={IconStyle}
                        // icon={<WorkIcon />}
                    >
                        <p>
                            Good effort! Salah with a decent effort after Robertson's cutback, 
                            but the Egyptian can't keep his shot down and it flies just over the crossbar. 
                            That makes it 36 efforts at goal today by Liverpool.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2008 - 2010"
                        iconStyle={IconStyle}
                        // icon={<WorkIcon />}
                    >
                        <p>
                            Good effort! Salah with a decent effort after Robertson's cutback, 
                            but the Egyptian can't keep his shot down and it flies just over the crossbar. 
                            That makes it 36 efforts at goal today by Liverpool.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2006 - 2008"
                        iconStyle={IconStyle}
                        // icon={<WorkIcon />}
                    >
                        <p>
                            Good effort! Salah with a decent effort after Robertson's cutback, 
                            but the Egyptian can't keep his shot down and it flies just over the crossbar. 
                            That makes it 36 efforts at goal today by Liverpool.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="April 2013"
                        iconStyle={IconStyle}
                        // icon={<SchoolIcon />}
                    >
                        <p>
                            Good effort! Salah with a decent effort after Robertson's cutback, 
                            but the Egyptian can't keep his shot down and it flies just over the crossbar. 
                            That makes it 36 efforts at goal today by Liverpool.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="November 2012"
                        iconStyle={IconStyle}
                        // icon={<SchoolIcon />}
                    >
                        <p>
                            Good effort! Salah with a decent effort after Robertson's cutback, 
                            but the Egyptian can't keep his shot down and it flies just over the crossbar. 
                            That makes it 36 efforts at goal today by Liverpool.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="2002 - 2006"
                        iconStyle={IconStyle}
                        // icon={<SchoolIcon />}
                    >
                        <p>
                            Good effort! Salah with a decent effort after Robertson's cutback, 
                            but the Egyptian can't keep his shot down and it flies just over the crossbar. 
                            That makes it 36 efforts at goal today by Liverpool.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                         iconStyle={IconStyle}
                        // icon={<StarIcon />}
                    />
                </VerticalTimeline>
            </div>
        );
    }
} 

export default Commentry