import { FC, useEffect } from "react";
import AppRouter from "./components/router/AppRouter";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { useAppDispatch } from "./hooks/redux";
import Sidebar from "./components/sidebar/Sidebar";
import { getCategories } from "./store/reducers/categories/categoriesActionCreator";
import { getProducts } from "./store/reducers/products/productsActionCreator";
import User from "./components/user/User";

const App: FC = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getCategories());
		dispatch(getProducts());
	}, [dispatch]);

	return (
		<div>
			<div className="wrapper">
				<div style={{ height: "96px" }}></div>
				<Header />
				<main>
					<div className="container">
						<div style={{ display: "flex", position: "relative" }}>
							<Sidebar />
							<AppRouter />
						</div>
					</div>
				</main>
				https://www.figma.com/design/0NLM3BbnBtO4jmB9VnRNIB/%D1%82-%D0%B1%D0%B0%D0%BD%D0%BA?node-id=0-1&t=F529NdhBMGHynXIM-1 - тбанк <br/>
				https://www.figma.com/design/0JNNGwIrNxnpa8SsZORNS0/ostin?node-id=0-1&t=r1FsLk1mCoqoqhbG-1 - остин <br/>
				https://www.figma.com/design/ZetvNTr00m4lq9u3dYXf5f/%D0%B4%D1%80%D0%BE%D0%BC?node-id=0-1&t=cTg7MmU54GJVChxa-1 - дром <br/>
				https://www.figma.com/design/Dcld3HqaPBadrw9eFIx3zW/%D1%8D%D1%82%D0%B0%D0%B6%D0%B8?node-id=0-1&t=x9wDlqSzBEUMMcHC-1 - этажи  <br/>
				https://www.figma.com/design/4W4qI6F01m1L4Mo6HEZTSj/siestacoffee?node-id=0-1&t=Wx1vcuT2aYLYJU3t-1 - siestacoffee <br/>
				https://www.figma.com/design/6Ss5iUkQqHR10R9eMBgYRB/%D1%82%D0%BE%D1%80%D1%82%D0%BE%D1%84%D1%84?node-id=0-1&t=VkELbXJErTRxeQdb-1 - тортофф <br/>
				https://www.figma.com/design/RIQuA10HEcppdTdFxUzPpH/%D1%80%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9%D0%BA%D0%B0%D1%80%D0%B0%D0%B2%D0%B0%D0%B9?node-id=0-1&t=rjYpUElAc1OjnyZS-1 - русский каравай <br/>
				https://www.figma.com/design/stKpn5cvfaSy9TxEtdfaY6/alldrive?node-id=0-1&t=8xhUrNYzl1SncZMF-1 - alldrive <br/>
				https://www.figma.com/design/FtrTuKi1SAQMaiYLEECDZX/%D1%81%D0%BB%D1%83%D0%B6%D0%B1%D0%B0%D0%BA%D1%80%D0%BE%D0%B2%D0%B8?node-id=0-1&t=vAzHTATcxObHLvE5-1 - служба крови <br/>
				https://www.figma.com/design/K2pH9kySosFMidxcRvWrRC/%D1%80%D0%B5%D0%BC%D0%B1%D1%8B%D1%82?node-id=0-1&t=WA2aKxZxgeifpGU3-1 - рембыт <br/>
				https://www.figma.com/design/J08F4urE4NT2oEDS4I6uF8/avtor24?node-id=0-1&t=eA83S4oaoNcXxFAK-1 - автор24 <br/>
				https://www.figma.com/design/bD1vfNQXqmS32ytDlLf56b/skillbox?node-id=0-1&t=117rCuXO79npoXJi-1 - skillbox <br/>
				https://www.figma.com/design/HvUpLHbZvgiStJ8Rn1NZPd/eldorado.ru?node-id=0-1&t=iF4SEMpCLGRaFeLf-1 - eldorado <br/>
				https://www.figma.com/design/xGKEUaUOfY5fhHzZH1i10L/domotekhnika.ru?node-id=0-1&t=u2R1JMf40pqR8OsL-1 - domoteхника <br/>
				https://www.figma.com/design/wFcMp1iG6sJrm0LZL5PZeF/pro32?node-id=0-1&t=gJsdtxuxSj0xjNaA-1 - pro32
				<Footer />
				<User />
			</div>
		</div>
	);
};

export default App;
