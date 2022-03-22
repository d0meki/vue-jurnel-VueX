
export default () =>({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString,
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ipsam odio doloremque aperiam nemo minus libero eveniet deleniti aliquam, tempora saepe magnam facilis delectus distinctio possimus ab id, quam quo!',
            picture: null,/* https: */
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString,
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus doloremque quos commodi odit fugiat, nemo soluta a, reprehenderit adipisci ipsum quibusdam incidunt quidem ducimus doloribus exercitationem? Dignissimos ut odit debitis!',
            picture: null,/* https: */
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString,
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nemo dolorem totam natus atque, repudiandae quaerat facere quisquam harum ratione tenetur repellendus incidunt, ipsa doloremque debitis! Quisquam omnis eius accusantium.',
            picture: null,/* https: */
        }
    ]
}) 