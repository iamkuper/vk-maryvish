import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import { Banner, CardGrid, Card, Header, PanelHeaderButton } from '@vkontakte/vkui';
import Icon28CompassCircleFillBlue from '@vkontakte/icons/dist/28/compass_circle_fill_blue';

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader left={(fetchedUser && fetchedUser.photo_200) ? <Avatar src={fetchedUser.photo_200}/> : null} right={<PanelHeaderButton><Icon28CompassCircleFillBlue /></PanelHeaderButton>} >MARYVISH.ru</PanelHeader>
		{fetchedUser &
		<Group title="User Data Fetched with VK Bridge">
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
		</Group>}

		<Group title="Navigation Example">
			<Group separator="hide" header={<Header mode="secondary">С внешней тенью</Header>}>
		        <CardGrid>
		          <Card size="l" mode="shadow">
		            <div style={{ height: 96 }} />
		          </Card>
		        </CardGrid>
		    </Group>
		</Group>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
