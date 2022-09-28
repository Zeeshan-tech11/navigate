export let users={
   admin:'admin123'
}
export function setPassword(pasword) {
   users['admin']=pasword
   console.log('USERS',users)
}
