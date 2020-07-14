import React, { useEffect } from "react";

function SubjectChart({ chartData, title }) {
    const id = "subject-chart";
    const renderChart = () => {
        let chartSvg = document.getElementById(id),
            chartOuter = chartSvg.parentElement,
            { labels, values } = chartData,
            width = chartOuter.offsetWidth,
            height = window.innerWidth >= 48 * 16 ? 200 : 100,
            safeZonePercent = window.innerWidth >= 48 * 16 ? 30 : 45,
            minValue = Math.min(...values),
            maxValue = Math.max(...values);

        function valueToYCoord(value) {
            return (
                (((height * (100 - safeZonePercent)) / 100) *
                    (maxValue - value)) /
                (maxValue - minValue)
            );
        }

        function indexToXCoord(index) {
            return (index / (values.length - 1)) * width;
        }

        chartOuter
            .querySelectorAll(".subject-chart-label, .subject-chart-point")
            .forEach((node) => node.remove());

        let d = `M ${indexToXCoord(0)} ${valueToYCoord(
            values[0]
        )} L 0 ${height} L ${width} ${height}`;

        for (let index = values.length - 1; index >= 0; --index) {
            let value = values[index],
                valuePoint = document.createElement("div"),
                valueLabel = document.createElement("div");
            d += ` L ${indexToXCoord(index)} ${valueToYCoord(value)}`;
            valuePoint.className = "subject-chart-point has-lg-shadow";
            valuePoint.style.top = valueToYCoord(value) + "px";
            valuePoint.style.left = indexToXCoord(index) + "px";
            valueLabel.className = "subject-chart-label";
            valueLabel.innerHTML = `<b>${value}</b><br/><small>${labels[index]}</small>`;
            valueLabel.style.top = valueToYCoord(value) + "px";
            valueLabel.style.left = indexToXCoord(index) + "px";
            chartOuter.appendChild(valuePoint);
            chartOuter.appendChild(valueLabel);
        }

        chartSvg.setAttribute("width", width);
        chartSvg.setAttribute("height", height);
        chartSvg.querySelector("path").setAttribute("d", d);
    };
    useEffect(() => {
        renderChart();
        window.addEventListener("resize", () => renderChart());
        window.addEventListener("orientationchange", () => renderChart());
    });

    return (
        <div id="subject-chart-outer">
            <svg id={id}>
                <path fill="rgba(0,0,0,.18)"></path>
            </svg>
            {title ? <h3 class="subject-chart-title">{title}</h3> : null}
        </div>
    );
}

export default SubjectChart;
