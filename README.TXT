index.html                      			// Pagina principal
  app/                          			// Directorio principal de la aplicación
	app.module.ts                  			// Define la aplicación como modulo.
	app.routing.ts       					// Aca podemos definir Todas las rutas de todos los modulos y sus componentes
    main.ts                     			// bootstraping
    app.component.css           			//
    app.component.html          			//
    app.component.ts            			// Componente raiz, lo podemos utilizar para el menu por ejemplo
    patients/                   			// contenedor del modulo
		components/                         // Contenedor de componentes
			detail/                         // Componente para mostrar el detalle de una paciente
				detail.component.css        
				detail.component.html		
				detail.component.ts    		// Aca colocamos la lógica de la interface (funciones...)
			list/
				list.component.css
				list.component.html
				list.component.ts      		
		shared/
			models/
				patient.model.ts            // Define la entidad paciente
			resources/
				patient.config.ts           // Variables de configuración (idioma, REST API URL)
			services/
				src/
					patient.service.ts      // interface que define el servicio
				def/
					patient.service.ts      // Implementación del servicio que consume los servicios rest
				
		patients.module.ts                  // Define el modulo paciente con sus componentes y demas.
		patients.routing.ts       			// Aca podemos definir las rutas del componente en cuestión
    shared/                     			// Shared features across the app
      common.ts                 			// Modulo que comparte lógica en la aplicación por ejemplo encripción
      