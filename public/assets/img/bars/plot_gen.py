import pandas as pd
import matplotlib.ticker as ticker
from matplotlib import pyplot as plt
from matplotlib.axis import Axis


def save_bar_plot(data, rank):
    name = list(data.keys())
    values = list(data.values())

    fig, ax = plt.subplots(figsize=(6, 3))
    plt.xlabel("mean(|SHAP Values|)")

    ax.barh(name, values, color="#fb0454")

    for s in ["top", "right"]:
        ax.spines[s].set_visible(False)

    ax.xaxis.set_ticks_position("none")
    ax.yaxis.set_ticks_position("none")

    ax.xaxis.set_tick_params(pad=5)
    ax.yaxis.set_tick_params(pad=5)

    ax.grid(axis="x")
    ax.invert_yaxis()

    for i in ax.patches:
        plt.text(
            i.get_width() + 0.05,
            i.get_y() + 0.5,
            str("+" + str(i.get_width())),
            fontsize=8,
            color="#fb0454",
        )

    plt.savefig(
        f"E:\\JT_FYP\\Backend\\xai_resume_filtering\\media\\bar_plot_{rank}.png",
        bbox_inches="tight",
    )
