import React from "react"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchAction } from "../store/actions/contactAction"
import LoadingScreen from "../components/LoadingScreen"
import LoadingDetail from "../components/LoadingDetail"
import ErrorScreen from "../components/ErrorScreen"
import ContactList from "../components/ContactList"
import FormAdd from "../components/FormAdd"
import DetailScreen from "../components/DetailScreen"
import { Slide } from "react-reveal"

export default function Home() {
  const { contacts, detail, loading, error, detailLoading, revealAddForm } = useSelector((state) => state.contactsData)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAction())
  }, [dispatch])

  if (loading) return <LoadingScreen />
  if (error) return <ErrorScreen />

  console.log(contacts)

  return (
    <div className="home">
      <ContactList contacts={contacts} />
      {revealAddForm && (
        <Slide right duration={500}>
          <FormAdd />
        </Slide>
      )}
      {detailLoading && <LoadingDetail />}
      {detail && <DetailScreen detail={detail} />}
    </div>
  )
}
