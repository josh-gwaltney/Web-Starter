export default function(config, gulp, plugins) {
    plugins.util.log('Building application');

    return gulp.src('')
        .pipe(plugins.notify({
            onLast: true,
            message: 'Code Deployed'
        }));
};