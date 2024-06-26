export const base_api = 'http://localhost:8080';
export const base_api_restaurants = base_api + '/restaurants';
export const MockUserId = 'faf16280-506c-480e-8f9c-16beab497b21';
export const apiConfig = {
    // ristorantiUrl: 'https://gnam-mock.free.beeceptor.com/ristoranti',
    ristorantiUrl: 'https://3c74b6c1-b883-4de7-acba-06c8e443a3d9.mock.pstmn.io/ristoranti',
    profiloUrl: 'https://3c74b6c1-b883-4de7-acba-06c8e443a3d9.mock.pstmn.io/profilo',
    dettaglio_ristorante : 'https://89f5accf-b373-4ad4-a63b-ef81be21e697.mock.pstmn.io/ristoranti/dettaglio/',
    all_restaurants : base_api_restaurants + '/all', 
  };

  // Nel caso non si dovesse caricare o non esiste
  export const DEFAULT_IMAGE = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-tUn7mE2S4p8_xMP_pCYtfhsfeXMOO6FdVA&s"
  
  //__________________________________________________
  // _______________BASE URL__________________________
  const API_BASE_URL = 'http://localhost:8080'
  // _________________________________________________
  //__________________________________________________


  // stato dell'arte:
  // cambia quelle sopra in simili a queste sotto
  export const ENDPOINTS_MENU_ITEMS = {
    GET_MENU_ITEM_BY_ID: (id: any) => `${API_BASE_URL}/menuitems/${id}`,
    UPDATE_MENU_ITEM: (id: any) => `${API_BASE_URL}/menuitems/update/${id}`,
    CREATE_MENU_ITEM: `${API_BASE_URL}/menuitems/create`,
    GET_MENU_ITEMS_BY_RESTAURANT_ID: (restaurantId: any) => `${API_BASE_URL}/menuitems/menu-by-restaurant/${restaurantId}`,
  };

  export const ENDPOINTS_ORDER_ITEM = {
    CREATE_ORDER_ITEM: `${API_BASE_URL}/order-items/create`,
    GET_ORDER_ITEMS_BY_USER_ID: (userId: any) => `${API_BASE_URL}/order-items/get-by-user/${userId}`,
    DELETE_ORDER_ITEM_BY_USER_ID: (userId: any) => `${API_BASE_URL}/order-items/delete/${userId}`,
  };