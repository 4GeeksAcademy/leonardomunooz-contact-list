const getState = ({ getStore, getActions, setStore }) => {

	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contacts: [],
			urlContactList: "https://playground.4geeks.com/contact"

		},

		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			createContact: async (contact) => {

				try {
					const response = await fetch(`${getStore().urlContactList}/agendas/leonardo-agenda/contacts`, {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(contact)
					})

					if (response.ok) {
						console.log('se ha guardado el contacto');
						await getActions().getAllContact()
						return true

					} else {
						console.log('algo ha ocurridoooooooo');
						return false
					}


				} catch (error) {
					console.log(error);

				}
			},
			createAgenda: async () => {
				try {
					const response = fetch(`${getStore().urlContactList}/agendas/leonardo-agenda`, {
						method: "POST"
					})
					if (response.status === 201) {
						console.log('Se ha creado la agenda');
						return true
					} else {
						return false
					}
				} catch (error) {
					console.log(error);

				}
			},
			getAllContact: async () => {
				const { urlContactList } = getStore()

				try {
					const response = await fetch(`${urlContactList}/agendas/leonardo-agenda/contacts`)
					const data = await response.json(response)

					if (response.status == 404) {
						getActions().createAgenda()
						console.log('AQUII');

					}
					if (response.ok) {
						setStore({
							contacts: data.contacts
						})
					}

				} catch (error) {
					console.log(error)
				}
			},
			deleteContact: async (id) => {
				const { urlContactList } = getStore()
				try {
					const response = await fetch(`${urlContactList}/agendas/leonardo-agenda/contacts/${id}`, {
						method: "DELETE",
					})
					if (response.ok) {
						console.log('Usuario eliminado');
						console.log(id);
						getActions().getAllContact()
						return true

					} else {
						console.log('No se encuentra el usuario');
						return false
					}

				} catch (error) {
					console.log(error);
				}
			},
			updateContact: async (contact, id) => {
				const { urlContactList } = getStore()
				try {
					const response = await fetch(`${urlContactList}/agendas/leonardo-agenda/contacts/${id}`, {
						method: "PUT",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(contact)
					})

					if (response.ok) {
						getActions().getAllContact()
					} else {
						console.log('Ha ocurrido un error');

					}

				} catch (error) {
					console.log(error);
				}
			}
		}
	};
};

export default getState;
