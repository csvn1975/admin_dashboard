var notificationData = [
	{
		type: 'gift',
		content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
		date: '02.03.2021'
	},

	{
		type: 'tasks',
		content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
		date: '03.03.2021'
	},
	{
		type: 'gift',
		content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
		date: '02.03.2021'
	},

	{
		type: 'tasks',
		content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
		date: '03.03.2021'
	},
	{
		type: 'gift',
		content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
		date: '02.03.2021'
	},

	{
		type: 'tasks',
		content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
		date: '03.03.2021'
	},
	{
		type: 'gift',
		content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
		date: '02.03.2021'
	},

	{
		type: 'tasks',
		content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
		date: '03.03.2021'
	},

	{
		type: 'gift',
		content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
		date: '02.03.2021'
	},

	{
		type: 'tasks',
		content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
		date: '03.03.2021'
	},
]

function getHTMLNotifications(){
	let output = "";
	notificationData.forEach(function(item){
		output += `<li class="dropdown-menu-item">
					<a href="#" class="dropdown-menu-link">
						<div>
							<i class="fas fa-${item.type}"></i>
						</div>
						<span>
							${item.content}
							<br>
							<span>
								${item.date}
							</span>
						</span>
					</a>
				</li>`
	});
	return output;
}