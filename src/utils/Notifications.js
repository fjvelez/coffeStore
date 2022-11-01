import * as Notifications from 'expo-notifications'
import { Alert, Platform } from 'react-native'
import { API_NOTIFICATIONS } from './const'



// retorna token para cada usuario y se debe almacenar ya que este dato
// es necesario para enviar la notificacion
export const getToken = async () => {
  const { status } = await Notifications.getPermissionsAsync()
  if (status !== "granted") {
    return
  }

  const token = await Notifications.getExpoPushTokenAsync()
  return token.data
}

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true
  })
})

export const startNotifications = (notificationListener, responseListener) => {
  notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
    console.log(notification)
  })

  responseListener.current = Notifications.addNotificationResponseReceivedListener(notification => {
    console.log(notification)
  })

  return () => {
    Notifications.removeNotificationSubscription(notificationListener)
    Notifications.removeNotificationSubscription(responseListener)
  }
}

export const sendPushNotification = async (message) => {
  let response = false
  await fetch(`${API_NOTIFICATIONS}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Accept-encoding": "gzip, deflate",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(message)
  }).then(() => response = true)
  return response
}

export const setNotificationMessage = (token, title, body, data) => {
  const message = {
    to: token,
    sound: "default",
    title: title,
    body: body,
    data: data
  }
  return message
}

// desde donde se vaya a enviar la notificacion, crear lo siguiente
const sendNotificacion = async () => {
  const resultToken = await getToken()
  if (!resultToken) {
    Alert.alert("No se obtuvo token del usuario")
    return
  }
  const messageNotification = setNotificationMessage(
    resultToken,
    `Titulo de prueba`,
    `Mensaje de prueba`,
    { data: `Data de prueba` }
  )

  const response = await sendPushNotification(messageNotification)

  if (response) {
    Alert.alert("Mensaje enviado")
  } else {
    Alert.alert("Mensaje no enviado")
  }
}