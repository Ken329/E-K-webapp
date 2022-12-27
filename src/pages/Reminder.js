import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Countdown from 'react-countdown';

import Loader from '../components/loader';
import Container from '../components/container'
import Header from '../components/header'
import Footer from '../components/footer'
import CountdownTimer from '../components/reminder/countdown';
import Success from '../components/reminder/success'
import Plus from '../components/reminder/plus';

import { reminderTransformation } from '../utils/helpers';
import { getReminderList } from '../network/reminder';

function Reminder() {
    const [ready, setReady] = useState(true)
    const [list, setList] = useState([])
    const [insertResponse, setInsertResponse] = useState({})
    const [deleteResponse, setDeleteResponse] = useState({})

    useEffect(async () => {
        const data = await getReminderList()
        if (data.success) {
            const transformedData = reminderTransformation(data.data)
            setList(transformedData)
            setReady(true)
        } else {
            toast.error(data)
        }
    }, [])

    useEffect(async () => {
        if (Object.keys(insertResponse).length !== 0) {
            const { message, list } = insertResponse
            toast.success(message, {
                position: toast.POSITION.TOP_RIGHT
            });
            const transformedData = reminderTransformation(list)
            console.log(transformedData)
            setList(transformedData)
        }
    }, [insertResponse])

    useEffect(async () => {
        if (Object.keys(deleteResponse).length !== 0) {
            const { message, list } = deleteResponse
            toast.success(message, {
                position: toast.POSITION.TOP_RIGHT
            });
            const transformedData = reminderTransformation(list)
            console.log(transformedData)
            setList(transformedData)
        }
    }, [deleteResponse])

    const renderer = ({ days, hours, minutes, completed }, id, title, message, type, date, years) => {
        if (completed && type !== 'recursion') {
            return <Success message={message} title={title} />;
        } else {
            return <CountdownTimer id={id} title={title} days={days} hours={hours} minutes={minutes} type={type} date={date} message={message} years={years} deleteFunc={setDeleteResponse} />
        }
    };

    return (
        <>
            <Container>
                {
                    ready ?
                        <>
                            <Header />
                            <div class="pt-8 pb-40 mx-auto grid grid-cols-1 gap-1 mx-2 px-2 overflow-y-auto sm:grid-cols-2 gap-2">
                                <Plus insertFunc={setInsertResponse} />
                                {
                                    list.map(({ id, date, title, message, type, years }) => {
                                        return <Countdown
                                            date={new Date(date)}
                                            renderer={props => (renderer(props, id, title, message, type, date, years))}
                                        />
                                    })
                                }

                            </div>
                            <Footer />
                        </>
                        : <Loader />
                }
                <ToastContainer />
            </Container>
        </>
    )
}
export default Reminder;
