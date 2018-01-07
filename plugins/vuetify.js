/*import Vue from 'vue';
 import Vuetify from 'vuetify';

 Vue.use(Vuetify, {
 theme: {
 primary: '#009688',
 }
 })*/

import Vue from 'vue'
import {
    Vuetify,
    VApp,
    VCard,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    VTextField,
    VSnackbar,
    VDataTable,
    VDialog,
    VAlert,
    VCheckbox,
    VDatePicker,
    VDivider,
    VExpansionPanel,
    VForm,
    VMenu,
    VProgressCircular,
    VRadioGroup,
    VSelect,
    VTabs
} from 'vuetify'

Vue.use(Vuetify, {
    theme: {
        primary: '#009688',
        accent: '#33b188',
        secondary: '#424242',
        info: '#0D47A1',
        warning: '#ffb300',
        error: '#B71C1C',
        success: '#2E7D32',
    },
    components: {
        VApp,
        VCard,
        VNavigationDrawer,
        VFooter,
        VList,
        VBtn,
        VIcon,
        VGrid,
        VToolbar,
        VTextField,
        VSnackbar,
        VDataTable,
        VDialog,
        VAlert,
        VCheckbox,
        VDatePicker,
        VDivider,
        VExpansionPanel,
        VForm,
        VMenu,
        VProgressCircular,
        VRadioGroup,
        VSelect,
        VTabs
    }
})
