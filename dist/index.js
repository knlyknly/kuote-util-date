import hello from "./hello.js";

export default (function () {
    var weeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var monthsShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    var padZero = function (inString) {
        return ("00" + inString).slice(-2);
    };
    var selector = {
        "yyyy": function (date) {
            return date.getFullYear();
        },
        "yy": function (date) {
            return date.getFullYear().toString().slice(-2);
        },
        "MMMM": function (date) {
            return months[date.getMonth()];
        },
        "MMM": function (date) {
            return monthsShort[date.getMonth()];
        },
        "MM": function (date) {
            return padZero(date.getMonth() + 1);
        },
        "M": function (date) {
            return date.getMonth() + 1;
        },
        "dd": function (date) {
            return padZero(date.getDate());
        },
        "d": function (date) {
            return date.getDate();
        },
        "hh": function (date) {
            var h = date.getHours();
            return h === 12 ? "12" : padZero(h % 12);
        },
        "h": function (date) {
            var h = date.getHours();
            return h === 12 ? "12" : h % 12;
        },
        "P": function (date) {
            return date.getHours() < 12 ? "AM" : "PM";
        },
        "HH": function (date) {
            return padZero(date.getHours());
        },
        "H": function (date) {
            return date.getHours();
        },
        "mm": function (date) {
            return padZero(date.getMinutes());
        },
        "m": function (date) {
            return date.getMinutes();
        },
        "ss": function (date) {
            return padZero(date.getSeconds());
        },
        "s": function (date) {
            return date.getSeconds();
        },
        "DDDD": function (date) {
            return weeks[date.getDay()];
        },
        "DDD": function (date) {
            return weeks[date.getDay()].substring(0, 3);
        },
        "D": function (date) {
            return date.getDay();
        }
    };
    return {
        now: Date.now,
        hello: hello,
        /**
         * A Date format function.
         * <table>
         * <tr><th>place holder</th><th>explain</th><th>example</th></tr>
         * <tr><td>yyyy</td><td>Full year</td><td>1970</td></tr>
         * <tr><td>yy</td><td>Short year</td><td>70</td></tr>
         * <tr><td>MMMM</td><td>Full month</td><td>January</td></tr>
         * <tr><td>MMM</td><td>Short month</td><td>Jan</td></tr>
         * <tr><td>MM</td><td>Month with pad 0</td><td>01</td></tr>
         * <tr><td>M</td><td>Month</td><td>1</td></tr>
         * <tr><td>dd</td><td>Day of month with pad 0</td><td>01</td></tr>
         * <tr><td>d</td><td>Day of month</td><td>1</td></tr>
         * <tr><td>hh</td><td>Hour in 12 with pad 0</td><td>00 or 12</td></tr>
         * <tr><td>h</td><td>Hour in 12</td><td>0 or 12</td></tr>
         * <tr><td>P</td><td>Period(AM/PM)</td><td>AM</td></tr>
         * <tr><td>HH</td>Hour in 24 with pad 0<td></td><td>00</td></tr>
         * <tr><td>H</td><td>Hour in 24</td><td>0</td></tr>
         * <tr><td>mm</td><td>Minute with pad 0</td><td>00</td></tr>
         * <tr><td>m</td><td>Minute</td><td>0</td></tr>
         * <tr><td>ss</td><td>Second with pad 0</td><td>00</td></tr>
         * <tr><td>s</td><td>Second</td><td>0</td></tr>
         * <tr><td>DDDD</td><td>Day name of week</td><td>Monday</td></tr>
         * <tr><td>DDD</td><td>Short day name of week</td><td>Mon</td></tr>
         * <tr><td>D</td><td>Day of week</td><td>0(Sunday)</td></tr>
         * </table>
         *
         * @method format
         * @param {String} format
         * @param {Date} date
         * @namespace nx.date
         */
        format: function (inFormat, inDate) {
            var format = inFormat || "yyyy-MM-dd hh:mm:ss DD";
            var date = inDate || new Date();
            return format.replace(/yyyy|yy|MMMM|MMM|MM|dd|d|hh|h|P|HH|H|mm|m|ss|s|DDDD|DDD|D/g, function (key) {
                return selector[key](date);
            });
        }
    };
})();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEtBQVAsTUFBa0IsWUFBbEI7O0FBRUEsZUFBZSxDQUFDLFlBQVk7QUFDeEIsUUFBSSxRQUFRLENBQUMsUUFBRCxFQUFXLFFBQVgsRUFBcUIsU0FBckIsRUFBZ0MsV0FBaEMsRUFBNkMsVUFBN0MsRUFBeUQsUUFBekQsRUFBbUUsVUFBbkUsQ0FBWjtBQUNBLFFBQUksU0FBUyxDQUFDLFNBQUQsRUFBWSxVQUFaLEVBQXdCLE9BQXhCLEVBQWlDLE9BQWpDLEVBQTBDLEtBQTFDLEVBQWlELE1BQWpELEVBQXlELE1BQXpELEVBQWlFLFFBQWpFLEVBQTJFLFdBQTNFLEVBQXdGLFNBQXhGLEVBQW1HLFVBQW5HLEVBQStHLFVBQS9HLENBQWI7QUFDQSxRQUFJLGNBQWMsQ0FBQyxLQUFELEVBQVEsS0FBUixFQUFlLEtBQWYsRUFBc0IsS0FBdEIsRUFBNkIsS0FBN0IsRUFBb0MsS0FBcEMsRUFBMkMsS0FBM0MsRUFBa0QsS0FBbEQsRUFBeUQsTUFBekQsRUFBaUUsS0FBakUsRUFBd0UsS0FBeEUsRUFBK0UsS0FBL0UsQ0FBbEI7QUFDQSxRQUFJLFVBQVUsVUFBVSxRQUFWLEVBQW9CO0FBQzlCLGVBQU8sQ0FBQyxPQUFPLFFBQVIsRUFBa0IsS0FBbEIsQ0FBd0IsQ0FBQyxDQUF6QixDQUFQO0FBQ0gsS0FGRDtBQUdBLFFBQUksV0FBVztBQUNYLGdCQUFRLFVBQVUsSUFBVixFQUFnQjtBQUNwQixtQkFBTyxLQUFLLFdBQUwsRUFBUDtBQUNILFNBSFU7QUFJWCxjQUFNLFVBQVUsSUFBVixFQUFnQjtBQUNsQixtQkFBTyxLQUFLLFdBQUwsR0FBbUIsUUFBbkIsR0FBOEIsS0FBOUIsQ0FBb0MsQ0FBQyxDQUFyQyxDQUFQO0FBQ0gsU0FOVTtBQU9YLGdCQUFRLFVBQVUsSUFBVixFQUFnQjtBQUNwQixtQkFBTyxPQUFPLEtBQUssUUFBTCxFQUFQLENBQVA7QUFDSCxTQVRVO0FBVVgsZUFBTyxVQUFVLElBQVYsRUFBZ0I7QUFDbkIsbUJBQU8sWUFBWSxLQUFLLFFBQUwsRUFBWixDQUFQO0FBQ0gsU0FaVTtBQWFYLGNBQU0sVUFBVSxJQUFWLEVBQWdCO0FBQ2xCLG1CQUFPLFFBQVEsS0FBSyxRQUFMLEtBQWtCLENBQTFCLENBQVA7QUFDSCxTQWZVO0FBZ0JYLGFBQUssVUFBVSxJQUFWLEVBQWdCO0FBQ2pCLG1CQUFPLEtBQUssUUFBTCxLQUFrQixDQUF6QjtBQUNILFNBbEJVO0FBbUJYLGNBQU0sVUFBVSxJQUFWLEVBQWdCO0FBQ2xCLG1CQUFPLFFBQVEsS0FBSyxPQUFMLEVBQVIsQ0FBUDtBQUNILFNBckJVO0FBc0JYLGFBQUssVUFBVSxJQUFWLEVBQWdCO0FBQ2pCLG1CQUFPLEtBQUssT0FBTCxFQUFQO0FBQ0gsU0F4QlU7QUF5QlgsY0FBTSxVQUFVLElBQVYsRUFBZ0I7QUFDbEIsZ0JBQUksSUFBSSxLQUFLLFFBQUwsRUFBUjtBQUNBLG1CQUFPLE1BQU0sRUFBTixHQUFXLElBQVgsR0FBa0IsUUFBUSxJQUFJLEVBQVosQ0FBekI7QUFDSCxTQTVCVTtBQTZCWCxhQUFLLFVBQVUsSUFBVixFQUFnQjtBQUNqQixnQkFBSSxJQUFJLEtBQUssUUFBTCxFQUFSO0FBQ0EsbUJBQU8sTUFBTSxFQUFOLEdBQVcsSUFBWCxHQUFtQixJQUFJLEVBQTlCO0FBQ0gsU0FoQ1U7QUFpQ1gsYUFBSyxVQUFVLElBQVYsRUFBZ0I7QUFDakIsbUJBQU8sS0FBSyxRQUFMLEtBQWtCLEVBQWxCLEdBQXVCLElBQXZCLEdBQThCLElBQXJDO0FBQ0gsU0FuQ1U7QUFvQ1gsY0FBTSxVQUFVLElBQVYsRUFBZ0I7QUFDbEIsbUJBQU8sUUFBUSxLQUFLLFFBQUwsRUFBUixDQUFQO0FBQ0gsU0F0Q1U7QUF1Q1gsYUFBSyxVQUFVLElBQVYsRUFBZ0I7QUFDakIsbUJBQU8sS0FBSyxRQUFMLEVBQVA7QUFDSCxTQXpDVTtBQTBDWCxjQUFNLFVBQVUsSUFBVixFQUFnQjtBQUNsQixtQkFBTyxRQUFRLEtBQUssVUFBTCxFQUFSLENBQVA7QUFDSCxTQTVDVTtBQTZDWCxhQUFLLFVBQVUsSUFBVixFQUFnQjtBQUNqQixtQkFBTyxLQUFLLFVBQUwsRUFBUDtBQUNILFNBL0NVO0FBZ0RYLGNBQU0sVUFBVSxJQUFWLEVBQWdCO0FBQ2xCLG1CQUFPLFFBQVEsS0FBSyxVQUFMLEVBQVIsQ0FBUDtBQUNILFNBbERVO0FBbURYLGFBQUssVUFBVSxJQUFWLEVBQWdCO0FBQ2pCLG1CQUFPLEtBQUssVUFBTCxFQUFQO0FBQ0gsU0FyRFU7QUFzRFgsZ0JBQVEsVUFBVSxJQUFWLEVBQWdCO0FBQ3BCLG1CQUFPLE1BQU0sS0FBSyxNQUFMLEVBQU4sQ0FBUDtBQUNILFNBeERVO0FBeURYLGVBQU8sVUFBVSxJQUFWLEVBQWdCO0FBQ25CLG1CQUFPLE1BQU0sS0FBSyxNQUFMLEVBQU4sRUFBcUIsU0FBckIsQ0FBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsQ0FBUDtBQUNILFNBM0RVO0FBNERYLGFBQUssVUFBVSxJQUFWLEVBQWdCO0FBQ2pCLG1CQUFPLEtBQUssTUFBTCxFQUFQO0FBQ0g7QUE5RFUsS0FBZjtBQWdFQSxXQUFPO0FBQ0gsYUFBSyxLQUFLLEdBRFA7QUFFVixlQUFPLEtBRkc7QUFHSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStCQSxnQkFBUSxVQUFVLFFBQVYsRUFBb0IsTUFBcEIsRUFBNEI7QUFDaEMsZ0JBQUksU0FBUyxZQUFZLHdCQUF6QjtBQUNBLGdCQUFJLE9BQU8sVUFBVSxJQUFJLElBQUosRUFBckI7QUFDQSxtQkFBTyxPQUFPLE9BQVAsQ0FBZSw0REFBZixFQUE2RSxVQUFVLEdBQVYsRUFBZTtBQUMvRix1QkFBTyxTQUFTLEdBQVQsRUFBYyxJQUFkLENBQVA7QUFDSCxhQUZNLENBQVA7QUFHSDtBQXhDRSxLQUFQO0FBMENILENBakhjLEdBQWYiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaGVsbG8gZnJvbSBcIi4vaGVsbG8uanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgd2Vla3MgPSBbXCJTdW5kYXlcIiwgXCJNb25kYXlcIiwgXCJUdWVzZGF5XCIsIFwiV2VkbmVzZGF5XCIsIFwiVGh1cnNkYXlcIiwgXCJGcmlkYXlcIiwgXCJTYXR1cmRheVwiXTtcbiAgICB2YXIgbW9udGhzID0gW1wiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIiwgXCJKdWx5XCIsIFwiQXVndXN0XCIsIFwiU2VwdGVtYmVyXCIsIFwiT2N0b2JlclwiLCBcIk5vdmVtYmVyXCIsIFwiRGVjZW1iZXJcIl07XG4gICAgdmFyIG1vbnRoc1Nob3J0ID0gW1wiSmFuXCIsIFwiRmViXCIsIFwiTWFyXCIsIFwiQXByXCIsIFwiTWF5XCIsIFwiSnVuXCIsIFwiSnVsXCIsIFwiQXVnXCIsIFwiU2VwdFwiLCBcIk9jdFwiLCBcIk5vdlwiLCBcIkRlY1wiXTtcbiAgICB2YXIgcGFkWmVybyA9IGZ1bmN0aW9uIChpblN0cmluZykge1xuICAgICAgICByZXR1cm4gKFwiMDBcIiArIGluU3RyaW5nKS5zbGljZSgtMik7XG4gICAgfTtcbiAgICB2YXIgc2VsZWN0b3IgPSB7XG4gICAgICAgIFwieXl5eVwiOiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgfSxcbiAgICAgICAgXCJ5eVwiOiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGUuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpLnNsaWNlKC0yKTtcbiAgICAgICAgfSxcbiAgICAgICAgXCJNTU1NXCI6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gbW9udGhzW2RhdGUuZ2V0TW9udGgoKV07XG4gICAgICAgIH0sXG4gICAgICAgIFwiTU1NXCI6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gbW9udGhzU2hvcnRbZGF0ZS5nZXRNb250aCgpXTtcbiAgICAgICAgfSxcbiAgICAgICAgXCJNTVwiOiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHBhZFplcm8oZGF0ZS5nZXRNb250aCgpICsgMSk7XG4gICAgICAgIH0sXG4gICAgICAgIFwiTVwiOiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGUuZ2V0TW9udGgoKSArIDE7XG4gICAgICAgIH0sXG4gICAgICAgIFwiZGRcIjogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBwYWRaZXJvKGRhdGUuZ2V0RGF0ZSgpKTtcbiAgICAgICAgfSxcbiAgICAgICAgXCJkXCI6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0ZS5nZXREYXRlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIFwiaGhcIjogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICAgICAgICAgIHZhciBoID0gZGF0ZS5nZXRIb3VycygpO1xuICAgICAgICAgICAgcmV0dXJuIGggPT09IDEyID8gXCIxMlwiIDogcGFkWmVybyhoICUgMTIpO1xuICAgICAgICB9LFxuICAgICAgICBcImhcIjogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICAgICAgICAgIHZhciBoID0gZGF0ZS5nZXRIb3VycygpO1xuICAgICAgICAgICAgcmV0dXJuIGggPT09IDEyID8gXCIxMlwiIDogKGggJSAxMik7XG4gICAgICAgIH0sXG4gICAgICAgIFwiUFwiOiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGUuZ2V0SG91cnMoKSA8IDEyID8gXCJBTVwiIDogXCJQTVwiO1xuICAgICAgICB9LFxuICAgICAgICBcIkhIXCI6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFkWmVybyhkYXRlLmdldEhvdXJzKCkpO1xuICAgICAgICB9LFxuICAgICAgICBcIkhcIjogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRlLmdldEhvdXJzKCk7XG4gICAgICAgIH0sXG4gICAgICAgIFwibW1cIjogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBwYWRaZXJvKGRhdGUuZ2V0TWludXRlcygpKTtcbiAgICAgICAgfSxcbiAgICAgICAgXCJtXCI6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0ZS5nZXRNaW51dGVzKCk7XG4gICAgICAgIH0sXG4gICAgICAgIFwic3NcIjogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBwYWRaZXJvKGRhdGUuZ2V0U2Vjb25kcygpKTtcbiAgICAgICAgfSxcbiAgICAgICAgXCJzXCI6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0ZS5nZXRTZWNvbmRzKCk7XG4gICAgICAgIH0sXG4gICAgICAgIFwiRERERFwiOiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHdlZWtzW2RhdGUuZ2V0RGF5KCldO1xuICAgICAgICB9LFxuICAgICAgICBcIkRERFwiOiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHdlZWtzW2RhdGUuZ2V0RGF5KCldLnN1YnN0cmluZygwLCAzKTtcbiAgICAgICAgfSxcbiAgICAgICAgXCJEXCI6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0ZS5nZXREYXkoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbm93OiBEYXRlLm5vdyxcblx0aGVsbG86IGhlbGxvLFxuICAgICAgICAvKipcbiAgICAgICAgICogQSBEYXRlIGZvcm1hdCBmdW5jdGlvbi5cbiAgICAgICAgICogPHRhYmxlPlxuICAgICAgICAgKiA8dHI+PHRoPnBsYWNlIGhvbGRlcjwvdGg+PHRoPmV4cGxhaW48L3RoPjx0aD5leGFtcGxlPC90aD48L3RyPlxuICAgICAgICAgKiA8dHI+PHRkPnl5eXk8L3RkPjx0ZD5GdWxsIHllYXI8L3RkPjx0ZD4xOTcwPC90ZD48L3RyPlxuICAgICAgICAgKiA8dHI+PHRkPnl5PC90ZD48dGQ+U2hvcnQgeWVhcjwvdGQ+PHRkPjcwPC90ZD48L3RyPlxuICAgICAgICAgKiA8dHI+PHRkPk1NTU08L3RkPjx0ZD5GdWxsIG1vbnRoPC90ZD48dGQ+SmFudWFyeTwvdGQ+PC90cj5cbiAgICAgICAgICogPHRyPjx0ZD5NTU08L3RkPjx0ZD5TaG9ydCBtb250aDwvdGQ+PHRkPkphbjwvdGQ+PC90cj5cbiAgICAgICAgICogPHRyPjx0ZD5NTTwvdGQ+PHRkPk1vbnRoIHdpdGggcGFkIDA8L3RkPjx0ZD4wMTwvdGQ+PC90cj5cbiAgICAgICAgICogPHRyPjx0ZD5NPC90ZD48dGQ+TW9udGg8L3RkPjx0ZD4xPC90ZD48L3RyPlxuICAgICAgICAgKiA8dHI+PHRkPmRkPC90ZD48dGQ+RGF5IG9mIG1vbnRoIHdpdGggcGFkIDA8L3RkPjx0ZD4wMTwvdGQ+PC90cj5cbiAgICAgICAgICogPHRyPjx0ZD5kPC90ZD48dGQ+RGF5IG9mIG1vbnRoPC90ZD48dGQ+MTwvdGQ+PC90cj5cbiAgICAgICAgICogPHRyPjx0ZD5oaDwvdGQ+PHRkPkhvdXIgaW4gMTIgd2l0aCBwYWQgMDwvdGQ+PHRkPjAwIG9yIDEyPC90ZD48L3RyPlxuICAgICAgICAgKiA8dHI+PHRkPmg8L3RkPjx0ZD5Ib3VyIGluIDEyPC90ZD48dGQ+MCBvciAxMjwvdGQ+PC90cj5cbiAgICAgICAgICogPHRyPjx0ZD5QPC90ZD48dGQ+UGVyaW9kKEFNL1BNKTwvdGQ+PHRkPkFNPC90ZD48L3RyPlxuICAgICAgICAgKiA8dHI+PHRkPkhIPC90ZD5Ib3VyIGluIDI0IHdpdGggcGFkIDA8dGQ+PC90ZD48dGQ+MDA8L3RkPjwvdHI+XG4gICAgICAgICAqIDx0cj48dGQ+SDwvdGQ+PHRkPkhvdXIgaW4gMjQ8L3RkPjx0ZD4wPC90ZD48L3RyPlxuICAgICAgICAgKiA8dHI+PHRkPm1tPC90ZD48dGQ+TWludXRlIHdpdGggcGFkIDA8L3RkPjx0ZD4wMDwvdGQ+PC90cj5cbiAgICAgICAgICogPHRyPjx0ZD5tPC90ZD48dGQ+TWludXRlPC90ZD48dGQ+MDwvdGQ+PC90cj5cbiAgICAgICAgICogPHRyPjx0ZD5zczwvdGQ+PHRkPlNlY29uZCB3aXRoIHBhZCAwPC90ZD48dGQ+MDA8L3RkPjwvdHI+XG4gICAgICAgICAqIDx0cj48dGQ+czwvdGQ+PHRkPlNlY29uZDwvdGQ+PHRkPjA8L3RkPjwvdHI+XG4gICAgICAgICAqIDx0cj48dGQ+RERERDwvdGQ+PHRkPkRheSBuYW1lIG9mIHdlZWs8L3RkPjx0ZD5Nb25kYXk8L3RkPjwvdHI+XG4gICAgICAgICAqIDx0cj48dGQ+REREPC90ZD48dGQ+U2hvcnQgZGF5IG5hbWUgb2Ygd2VlazwvdGQ+PHRkPk1vbjwvdGQ+PC90cj5cbiAgICAgICAgICogPHRyPjx0ZD5EPC90ZD48dGQ+RGF5IG9mIHdlZWs8L3RkPjx0ZD4wKFN1bmRheSk8L3RkPjwvdHI+XG4gICAgICAgICAqIDwvdGFibGU+XG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgZm9ybWF0XG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBmb3JtYXRcbiAgICAgICAgICogQHBhcmFtIHtEYXRlfSBkYXRlXG4gICAgICAgICAqIEBuYW1lc3BhY2UgbnguZGF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgZm9ybWF0OiBmdW5jdGlvbiAoaW5Gb3JtYXQsIGluRGF0ZSkge1xuICAgICAgICAgICAgdmFyIGZvcm1hdCA9IGluRm9ybWF0IHx8IFwieXl5eS1NTS1kZCBoaDptbTpzcyBERFwiO1xuICAgICAgICAgICAgdmFyIGRhdGUgPSBpbkRhdGUgfHwgbmV3IERhdGUoKTtcbiAgICAgICAgICAgIHJldHVybiBmb3JtYXQucmVwbGFjZSgveXl5eXx5eXxNTU1NfE1NTXxNTXxkZHxkfGhofGh8UHxISHxIfG1tfG18c3N8c3xEREREfERERHxEL2csIGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZWN0b3Jba2V5XShkYXRlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbn0pKCk7XG4iXX0=