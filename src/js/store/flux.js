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
			todos : [],
			urlContactList : "https://playground.4geeks.com/contact"
			
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
			createContact : async (agenda,contact)=> {
				
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
						getActions().getAllContact()
		
					} else {
						console.log('algo ha ocurridoooooooo');
		
					}
			
				} catch (error) {
					console.log(error);
		
				}
			},
			getAllContact : async (contact) =>  {
			const {urlContactList} = getStore()
		
				try {
					const response = await fetch(`${urlContactList}/agendas/leonardo-agenda/contacts`)
					const data =  await response.json(response)

					if (response.status === 404) {
						console.log('Aqui puedes crear el contacto');
						
					}else {
						
						setStore({
							todos : data.contacts
						})
						
					}


				} catch (error) {
					console.log(error)
				}
			}
		}
	};
};

export default getState;
