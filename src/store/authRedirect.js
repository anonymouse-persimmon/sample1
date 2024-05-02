import { useStorage } from '@vueuse/core'

// When displaying a page that requires authentication, store the URL of the requested page.
// Displays the stored URL if the keys match when redirected after authentication.
const authRedirect = useStorage('authRedirect', { key: '', url: ''})
export default authRedirect
