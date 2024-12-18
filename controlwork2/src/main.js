

import { render, RenderPosition } from "./framework/render.js";
import FinancePresenter from "./presenter/presenter.js";
import FinanceModel from "./model/model.js";


const bodyContainer = document.querySelector(".board-app");


const financeModel = new FinanceModel();
const financePresenter = new FinancePresenter(bodyContainer, financeModel);


financePresenter.init();
