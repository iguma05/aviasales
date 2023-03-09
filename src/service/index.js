class Service {
	BASE_URL = 'https://aviasales-test-api.kata.academy/';
	ID = '';

	getTickets = async () => {
		const urlFirst = `${this.BASE_URL}search`;

		if (!this.ID) {
			await fetch(urlFirst)
				.then((response) => {
					if (response.ok) {
						return response.json();
					} else {
						throw new Error(
							'Запрос на получение ID отклонен. Серверная ошибка'
						);
					}
				})
				.then((res) => this.ID = res.searchId);
		}

		const urlSecond = `${this.BASE_URL}tickets?searchId=${this.ID}`;

		return await fetch(urlSecond).then((response) => {
			if (response.ok) {
				return response.json();
			} else {
				throw new Error('Запрос на получение пачки билетов отклонен. Серверная ошибка');
			}
		});
	};
}

const service = new Service();

export default service;
