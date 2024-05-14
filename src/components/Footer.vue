<template>
    <!-- footer -->
        <footer class="view-container  footer">
            <h4 class="text-footer">
                © 2024 - POKéMON version Opale
                2018-2024 Projet Cobra Doré
                Angi-MK
            </h4>
        </footer>
    <!-- footer -->
</template>

<script>
    export default {
        name: 'Footer',
        data() {
            return {
            };
        },
        methods: {
        },
        mounted() {
        },
    };
</script>

<style scoped>
    .footer{
        width: 100%;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAACBCAYAAAA2ax9lAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTM5OEFDOEUxMTk4MTFFRjhCRUNGOUMzODUzODg2NzYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTM5OEFDOEYxMTk4MTFFRjhCRUNGOUMzODUzODg2NzYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBMzk4QUM4QzExOTgxMUVGOEJFQ0Y5QzM4NTM4ODY3NiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBMzk4QUM4RDExOTgxMUVGOEJFQ0Y5QzM4NTM4ODY3NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ps+CMgUAAAYUSURBVHja7JxNaBxl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), url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAACBCAYAAAD0W1vhAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjhEOEU3MUExMTk4MTFFRjk5NkJDQ0EyODI4REY5MDMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjhEOEU3MUIxMTk4MTFFRjk5NkJDQ0EyODI4REY5MDMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCOEQ4RTcxODExOTgxMUVGOTk2QkNDQTI4MjhERjkwMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCOEQ4RTcxOTExOTgxMUVGOTk2QkNDQTI4MjhERjkwMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PirMn4sAAABfSURBVHja7NexCYAwEAXQRGLhEIK4gTu4/xKWDpBGuMyQQkjg/f7Bfe6ayxGRerKkzgAAAAAAAPwJ8nWcMXmHstfPpoFJrvXZymgj3W/tA6sfCAAAAAAAAACGBE2AAQBmDgyhthBkyAAAAABJRU5ErkJggg==);
        background-repeat: no-repeat, repeat-x;
        background-position-x: left, 314px;
        height: 105px;
        display: flex;
        justify-content: flex-end;
        padding-top: 20px;
        z-index: 100;
        filter: drop-shadow(1px 1px 14px #000000AA);
    }
    .text-footer{
        position: absolute;
        bottom: 20px;
        width: 100%;
        text-align: center;
        color: #FFFFFF;
        font-weight: 400;
        font-size: 18px;
    }

    @media screen and (max-width: 900px){

    }
</style>